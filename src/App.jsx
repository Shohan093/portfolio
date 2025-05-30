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
            <li><a href="#blogs" className="hover:text-blue-500">Blogs</a></li>
            <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
          </ul>
        </div>
      </nav>

      { /* Hero Section */ }
      <section id="hero" className="flex items-center justify-center text-center py-32 px-4">
        <div>
          <h2 className="flex items-center justify-center text-center py-32 px-4">Hi, I am Shohan</h2>
          <p className="text-lg max-w-xl mx-auto">
            Aspiring Data Scientist | ML & AI Enthusiast | Building cool things one step at a time.
          </p>
        </div>
      </section>

      { /* About Section */ }
      <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify">
            I bring a strong foundation in analytical thinking, quantitative analysis, and mathematical modeling,
            backed by a B.Sc. in Mathematics from Shahjalal University of Science and Technology (SUST),
            and currently pursuing an M.Sc. in Data Science at Bangladesh Univeversity of Engineering and technology (BUET). I’m constantly exploring intersections of data science, machine learning, and computational modeling —
            looking to contribute to innovative projects, research, or industry roles where I can grow and make a meaningful impact.
          </p>
        </div>
      </section>

      { /* My Stacks */ }
      <section id="tech-stakcs" className="py-20 px-6 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-6">Technologies I Use</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 text-justify mb-6">
            Over the years, I have worked with a variety of technologies and tools that have helped me in my journey as a data scientist.
            Below are some of the key technologies I am proficient in, which I use to solve complex problems and build innovative solutions.
          </p>

          { /* Programming Languages */ }
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Programming Language</h3>
            <div className="flex flex-wrap gap-8 text-5xl">
              <i className="devicon-cplusplus-plain colored" title="C++"></i>
              <i className="devicon-c-plain colored" title="C"></i>
              <i className="devicon-python-plain colored" title="Python"></i>
              <i className="devicon-matlab-plain colored" title="MATLAB"></i>
              <img src="icons/FORTRAN.svg" alt="FORTRAN" title="FORTRAN" className="w-12 h-12"/>
            </div>
          </div>

          { /* Data Manipulation and Visulization */ }
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Data Manipulation and Visualization</h3>
            <div className="flex flex-wrap gap-8 text-5xl">
              <i className="devicon-numpy-original colored" title="Numpy"></i>
              <i className="devicon-pandas-original colored" title="Pandas"></i>
              <img src="icons/seaborn-1.svg" alt="Seaborn" title="Seaborn" className="w-12 h-12"/>
              <img src="icons/plotly-express.svg" alt="Plotly-Express" title="Plotly-Express" className="w-12 h-12"/>
              <img src="icons/matplotlib.svg" alt="Matplotlib" title="Matplotlib" className="w-12 h-12"/>
              <img src="icons/scipy.svg" alt="Scipy" title="Scipy" className="w-12 h-12"/>
              <img src="icons/geopandas_icon.svg" alt="Geopandas" title="Geopandas" className="w-12 h-12"/>
            </div>
          </div>

          { /* Database */ }
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Database</h3>
            <div className="flex flex-wrap gap-8 text-5xl">
              <i className="devicon-mysql-plain colored" title="MySQL"></i>
            </div>
          </div>

          { /* Machine Learning */ }
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">ML, DL & NLP</h3>
            <div className="flex flex-wrap gap-8 text-5xl">
              <img src="icons/sklearn.svg" alt="Scikit-learn" title="Scikit-Learn" className="h-12 w-12"/>
              <i className="devicon-pytorch-original colored" title="PyTorch"></i>
              <i className="devicon-tensorflow-original colored" title="TensorFlow"></i>
              <img src="icons/keras.svg" alt="Keras" title="Keras" className="w-12 h-12"/>
            </div>
          </div>

          {/* Tools */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-8 text-5xl">
              <i className="devicon-linux-plain colored" title="Linux"></i>
              <i className="devicon-jupyter-plain colored" title="Jupyter Notebook"></i>
              <i className="devicon-git-plain colored" title="Git"></i>
              <i className="devicon-github-original colored" title="GitHub"></i>
              <i className="devicon-latex-original colored" title="LaTeX"></i>
              <i className="devicon-vscode-plain colored" title="Visual Studio Code"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App