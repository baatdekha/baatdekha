import packageJson from '../../../package.json'; // adjust path if needed

function Footer() {
  return (
    <footer className='bg-pink-400 p-5 font-serif'>
      <h2>Services</h2>
      <p><i>Offering marketing and local assistance for everyone.</i></p>
      <p>© baatdekha.com 2025. All rights reserved.</p>
      <p><strong>Support</strong></p>
      <p><strong>Connect</strong></p>
      <p>+91 7682020188</p>
      <p>baatdekha@gmail.com</p>
      <p className="text-center font-mono">version: {packageJson.version}</p>
    </footer>
  )
}

export default Footer;
