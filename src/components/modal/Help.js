import React from 'react'
import "./InnerModal.css";

function Help() {
  return (
    <div className='inner_modal'>

      <h2>Hilfe</h2>
      <div className="settings_section">
        <h4>Nachrichten absenden</h4>
        <p>Nachrichten können mit Enter abgesendet werden.</p>
      </div>

      <h3>Chat Formatierung</h3>

      <div className="settings_section">
        <h4>Markdown</h4>
        <ul>
          <li>Fett schreiben: **Text**</li>
          <li>Kursiv schreiben: *Text*</li>
          <li>Durchgestrichen schreiben: ~~Text~~</li>
          <li>Bilder einfügen: ![Alt Text](Bild URL)</li>
        </ul>

      </div>
      <div className="settings_section">
        <h4>Emojis</h4>
        <p>Emojis werden automatisch ersetzt. Es können folgende Emojis verwendet werden.</p>

        <ul>
          <li>:) 😊</li>
          <li>:( 🙁</li>
          <li>:D 😁</li>
          <li>;( 😥</li>
          <li>:O 😮</li>
          <li>;) 😉</li>
          <li>8) 😎</li>
          <li>&gt;:@ 😡</li>
        </ul>

      </div>

    </div>
  )
}

export default Help