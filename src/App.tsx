import InvoicePage from './components/InvoicePage'
import { Invoice } from './data/types'

function App() {
  const savedInvoice = window.localStorage.getItem('invoiceData')
  let data = null

  try {
    if (savedInvoice) {
      data = JSON.parse(savedInvoice)
    }
  } catch (_e) {}

  const onInvoiceUpdated = (invoice: Invoice) => {
    window.localStorage.setItem('invoiceData', JSON.stringify(invoice))
  }

  return (
    <div className="app">
      <h1 className="center fs-30"> Quick Invoice </h1>
      <p className="center fs-16">Created by K L S CHANDARSENA | Index No: ITBIN-2211-0158</p>
      <InvoicePage data={data} onChange={onInvoiceUpdated} />
    </div>
  )
}

export default App
