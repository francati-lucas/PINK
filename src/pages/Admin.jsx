import { useState, useEffect } from 'react'
import { getSeries, addSerie, updateSerie, deleteSerie } from '../data/seriesData'
import { getMeetings, updateMeeting } from '../data/meetingsData'
import '../styles/Admin.css'

const EMPTY_FORM = { titulo: '', descricao: '', imagem: '', tag: '', destaque: false }
const EMPTY_MEETING_FORM = { city: '', schedule: '', badge: '' }

const Admin = () => {
  const [activeTab, setActiveTab] = useState('series')
  const [series, setSeries] = useState([])
  const [meetings, setMeetings] = useState([])
  const [form, setForm] = useState(EMPTY_FORM)
  const [editId, setEditId] = useState(null)
  const [showForm, setShowForm] = useState(false)
  
  const [meetingForm, setMeetingForm] = useState(EMPTY_MEETING_FORM)
  const [editMeetingId, setEditMeetingId] = useState(null)
  const [showMeetingForm, setShowMeetingForm] = useState(false)
  
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  const load = async () => {
    setLoading(true)
    try {
      const data = await getSeries()
      setSeries(data)
      
      const mData = await getMeetings()
      setMeetings(mData)
      
      // Auto-correct the broken image URL for "Quando desistir é mais fácil" in Firestore if it exists
      const brokenItem = data.find(s => s.titulo.includes('Quando desistir') && (!s.imagem || s.imagem.includes('1518173946687')));
      if (brokenItem) {
        const correctUrl = 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop';
        await updateSerie(brokenItem.id, { imagem: correctUrl });
        const updatedData = await getSeries();
        setSeries(updatedData);
      }
    } catch {
      flash('❌ Erro ao carregar dados.')
    }
    setLoading(false)
  }

  useEffect(() => { load() }, [])

  const flash = (text) => { setMsg(text); setTimeout(() => setMsg(''), 4000) }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.titulo.trim()) return
    setSaving(true)
    try {
      if (editId !== null) {
        await updateSerie(editId, form)
        flash('✅ Série atualizada!')
      } else {
        await addSerie(form)
        flash('✅ Série adicionada!')
      }
      await load()
      cancelForm()
    } catch {
      flash('❌ Erro ao salvar. Tente novamente.')
    }
    setSaving(false)
  }

  const handleEdit = (serie) => {
    setForm({
      titulo: serie.titulo,
      descricao: serie.descricao || '',
      imagem: serie.imagem || '',
      tag: serie.tag || '',
      destaque: !!serie.destaque,
    })
    setEditId(serie.id)
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!window.confirm('Remover esta série?')) return
    try {
      await deleteSerie(id)
      flash('🗑️ Série removida.')
      await load()
    } catch {
      flash('❌ Erro ao remover.')
    }
  }

  const cancelForm = () => {
    setForm(EMPTY_FORM)
    setEditId(null)
    setShowForm(false)
  }

  const handleMeetingChange = (e) => {
    const { name, value } = e.target
    setMeetingForm((f) => ({ ...f, [name]: value }))
  }

  const handleMeetingSubmit = async (e) => {
    e.preventDefault()
    if (!meetingForm.city.trim()) return
    setSaving(true)
    try {
      if (editMeetingId !== null) {
        await updateMeeting(editMeetingId, meetingForm)
        flash('✅ Encontro de ' + meetingForm.city + ' atualizado!')
        await load()
        cancelMeetingForm()
      }
    } catch {
      flash('❌ Erro ao salvar encontro. Tente novamente.')
    }
    setSaving(false)
  }

  const handleEditMeeting = (meeting) => {
    setMeetingForm({
      city: meeting.city,
      schedule: meeting.schedule || '',
      badge: meeting.badge || '',
      key: meeting.key || ''
    })
    setEditMeetingId(meeting.id)
    setShowMeetingForm(true)
  }

  const cancelMeetingForm = () => {
    setMeetingForm(EMPTY_MEETING_FORM)
    setEditMeetingId(null)
    setShowMeetingForm(false)
  }

  return (
    <main className="admin-container">
      <div className="admin-header">
        <div>
          <h1 className="admin-title">Painel de Controle</h1>
          <p className="admin-subtitle">Gerencie o conteúdo do site da PINK.</p>
        </div>
        {activeTab === 'series' && !showForm && (
          <button className="admin-btn-new" onClick={() => setShowForm(true)}>+ Nova Série</button>
        )}
      </div>

      <div className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === 'series' ? 'active' : ''}`}
          onClick={() => { setActiveTab('series'); cancelMeetingForm(); }}
        >
          Séries em Destaque
        </button>
        <button
          className={`admin-tab ${activeTab === 'meetings' ? 'active' : ''}`}
          onClick={() => { setActiveTab('meetings'); cancelForm(); }}
        >
          Agenda das Cidades
        </button>
      </div>

      {msg && <div className="admin-flash">{msg}</div>}

      {/* ── SEÇÃO SÉRIES ── */}
      {activeTab === 'series' && (
        <>
          {showForm && (
            <div className="admin-form-card">
              <h2 className="admin-form-title">{editId ? 'Editar Série' : 'Nova Série'}</h2>
              <form onSubmit={handleSubmit} className="admin-form">
                <div className="admin-form-row">
                  <div className="admin-field">
                    <label>Título *</label>
                    <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Ex: Quebrando Ciclos" required />
                  </div>
                  <div className="admin-field">
                    <label>Tag / Tema</label>
                    <input name="tag" value={form.tag} onChange={handleChange} placeholder="Ex: Libertação" />
                  </div>
                </div>

                <div className="admin-field">
                  <label>Descrição</label>
                  <textarea name="descricao" value={form.descricao} onChange={handleChange} rows={3} placeholder="Breve descrição da série..." />
                </div>

                <div className="admin-field">
                  <label>URL da Imagem de Capa</label>
                  <input
                    name="imagem"
                    value={form.imagem}
                    onChange={handleChange}
                    placeholder="https://i.imgur.com/... ou link do Google Drive"
                  />
                  <small className="admin-field-hint">
                    💡 Hospede sua imagem gratuitamente em <a href="https://imgur.com/upload" target="_blank" rel="noreferrer">imgur.com</a> e cole o link aqui.
                  </small>
                  {form.imagem && (
                    <div className="admin-img-preview">
                      <img src={form.imagem} alt="Preview" onError={(e) => e.target.style.display='none'} />
                    </div>
                  )}
                </div>

                <label className="admin-checkbox">
                  <input type="checkbox" name="destaque" checked={form.destaque} onChange={handleChange} />
                  Exibir como destaque na Home
                </label>

                <div className="admin-form-actions">
                  <button type="submit" className="admin-btn-save" disabled={saving}>
                    {saving ? 'Salvando...' : editId ? 'Salvar alterações' : 'Adicionar série'}
                  </button>
                  <button type="button" className="admin-btn-cancel" onClick={cancelForm}>Cancelar</button>
                </div>
              </form>
            </div>
          )}

          <div className="admin-table-card">
            <p className="admin-table-count">
              {loading ? 'Carregando...' : `${series.length} ${series.length === 1 ? 'série' : 'séries'} cadastradas`}
            </p>
            {loading ? (
              <p className="admin-empty">Buscando séries no banco de dados...</p>
            ) : series.length === 0 ? (
              <p className="admin-empty">Nenhuma série cadastrada. Clique em "+ Nova Série" para começar.</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Capa</th>
                    <th>Título</th>
                    <th>Tag</th>
                    <th>Destaque</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {series.map((s) => (
                    <tr key={s.id}>
                      <td>
                        {s.imagem
                          ? <img src={s.imagem} alt={s.titulo} className="admin-thumb" />
                          : <div className="admin-thumb-empty">—</div>
                        }
                      </td>
                      <td className="admin-td-title">{s.titulo}</td>
                      <td><span className="admin-tag">{s.tag || '—'}</span></td>
                      <td>{s.destaque ? <span className="admin-badge-yes">Sim</span> : <span className="admin-badge-no">Não</span>}</td>
                      <td className="admin-td-actions">
                        <button className="admin-btn-edit" onClick={() => handleEdit(s)}>Editar</button>
                        <button className="admin-btn-delete" onClick={() => handleDelete(s.id)}>Remover</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}

      {/* ── SEÇÃO ENCONTROS (CIDADES) ── */}
      {activeTab === 'meetings' && (
        <>
          {showMeetingForm && (
            <div className="admin-form-card">
              <h2 className="admin-form-title">Editar Agenda: {meetingForm.city}</h2>
              <form onSubmit={handleMeetingSubmit} className="admin-form">
                <div className="admin-field">
                  <label>Horários / Datas dos Encontros</label>
                  <input 
                    name="schedule" 
                    value={meetingForm.schedule} 
                    onChange={handleMeetingChange} 
                    placeholder="Ex: Todo 2º Sábado do Mês às 19:30h" 
                    required 
                  />
                  <small className="admin-field-hint">
                    💡 Informe a frequência e o horário dos encontros mensais desta cidade.
                  </small>
                </div>

                <div className="admin-field">
                  <label>Selo (Badge / Destaque)</label>
                  <input 
                    name="badge" 
                    value={meetingForm.badge} 
                    onChange={handleMeetingChange} 
                    placeholder="Ex: Matriz (deixe em branco se não houver)" 
                  />
                </div>

                <div className="admin-form-actions">
                  <button type="submit" className="admin-btn-save" disabled={saving}>
                    {saving ? 'Salvando...' : 'Salvar Alterações'}
                  </button>
                  <button type="button" className="admin-btn-cancel" onClick={cancelMeetingForm}>Cancelar</button>
                </div>
              </form>
            </div>
          )}

          <div className="admin-table-card">
            <p className="admin-table-count">
              {loading ? 'Carregando...' : `${meetings.length} cidades cadastradas`}
            </p>
            {loading ? (
              <p className="admin-empty">Buscando agenda das cidades no banco de dados...</p>
            ) : meetings.length === 0 ? (
              <p className="admin-empty">Nenhum encontro de cidade cadastrado.</p>
            ) : (
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Cidade</th>
                    <th>Horários / Datas</th>
                    <th>Selo (Badge)</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {meetings.map((m) => (
                    <tr key={m.id}>
                      <td className="admin-td-title">{m.city}</td>
                      <td>{m.schedule || '—'}</td>
                      <td>{m.badge ? <span className="admin-badge-yes">{m.badge}</span> : <span className="admin-badge-no">Nenhum</span>}</td>
                      <td className="admin-td-actions">
                        <button className="admin-btn-edit" onClick={() => handleEditMeeting(m)}>Editar</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </>
      )}
    </main>
  )
}

export default Admin
