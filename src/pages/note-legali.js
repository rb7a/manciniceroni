import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

const policy = ({ pageContext: { locale }, data }) => {
  return (
    <Layout path='/' locale={locale} data={data}>

      <section className='container' style={{ margin: '140px 0', padding: ' 0 4%' }}>
        <h1>Note Legali</h1>
        <p>ManciniCeroni Studio Legale (di seguito “ManciniCeroni”) non è un’associazione professionale. ManciniCeroni è costituito dall’Avv. Nicola Mancini (P.IVA: 02563520416), del foro di Ancona, con domicilio professionale sito in Ancona (AN), Via Alcide De Gasperi 82, e dall’Avv. Elisabetta Ceroni (P.IVA: 02225960448), del foro di Fermo, con domicilio professionale sito in 63831 Rapagnano (FM), Via Campogrande n. 21, entrambi soggetti al Codice Deontologico Forense.</p>
        <p>Il sito www.manciniceronistudiolegale.it (di seguito “Sito”) ed i suoi contenuti sono di proprietà esclusiva e sono protetti dalla normativa sulla tutela delle opere dell’ingegno.</p>
        <p>Il Sito può contenere collegamenti ad altri siti web che non sono sotto la gestione e/o il controllo di ManciniCeroni. L’eventuale presenza sul Sito di tali collegamenti non determina l’approvazione da parte di ManciniCeroni dei relativi contenuti e non può quindi comportare alcuna responsabilità nei confronti di ManciniCeroni.</p>
      </section>
    </Layout>
  )
}

export default policy
