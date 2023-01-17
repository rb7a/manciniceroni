import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const policy = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data}>

      <section className='container' style={{ margin: '140px 0', padding: ' 0 4%' }}>
        <h1>Note Legali</h1>
        <p>Ceroni & Mancini Avvocati (di seguito “Ceroni & Mancini”) non è un’associazione professionale. Ceroni & Mancini è costituito dall’Avv. Elisabetta Ceroni (P.IVA: 02225960448), del foro di Fermo, con domicilio professionale sito in 63831 Rapagnano (FM), Via San Severino n. 2, e dall’Avv. Nicola Mancini (P.IVA: 02563520416), del foro di Ancona, con domicilio professionale sito in Ancona 60125 (AN), Via Alcide De Gasperi 82, entrambi soggetti al Codice Deontologico Forense.</p>
        <p>Il sito www.ceronimancini.it (di seguito “Sito”) ed i suoi contenuti sono di proprietà esclusiva e sono protetti dalla normativa sulla tutela delle opere dell’ingegno.</p>
        <p>Il Sito può contenere collegamenti ad altri siti web che non sono sotto la gestione e/o il controllo di Ceroni & Mancini. L’eventuale presenza sul Sito di tali collegamenti non determina l’approvazione da parte di Ceroni & Mancini dei relativi contenuti e non può quindi comportare alcuna responsabilità nei confronti di Ceroni & Mancini.</p>
      </section>
    </Layout>
  )
}

export default policy
