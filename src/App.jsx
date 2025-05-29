function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      
      { /* Navigation Bar */ }
      <nav className="p-4 shadow-md sticky top-0 bg-white dark:bg-gray-900 z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Anisujjaman Shohan</h1>
          <ul className="flex gap-6 text-sm">
            <li><a href="#hero" className="hover:text-blue-500">Home</a></li>
            <li><a href="#about" className="hover:text-blue-500">About</a></li>
            <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      { /* Hero Section */ }
      <section id="Hero" className="flex items-center justify-center text-center py-32 px-4">
        <div>
          <h2 className="flex items-center justify-center text-center py-32 px-4">Hi, I am Shohan</h2>
          <p className="text-lg max-w-xl mx-auto">
            Aspiring Data Scientist | ML & AI Enthusiast | Building cool things one step at a time.
          </p>
        </div>
      </section>
    </div>
  )
}

export default App