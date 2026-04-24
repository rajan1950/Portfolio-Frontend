function FloatingNav({ items, activeSection, onNavigate }) {
  return (
    <nav className="floating-nav" aria-label="Primary">
      {items.map((item) => (
        <button
          key={item.id}
          type="button"
          className={activeSection === item.id ? 'active' : ''}
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

export default FloatingNav
