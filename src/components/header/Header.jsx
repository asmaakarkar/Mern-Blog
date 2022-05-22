import './header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className="header-title">
          <span className="header-title-sm">React & node</span>
          <span className="header-title-lg">Blog</span>
      </div>
      <img src="https://wallpaperaccess.com/full/1871775.jpg" alt="header image" className="header-image" />
    </div>
  )
}
