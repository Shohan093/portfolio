import GlitchText from "./components/GlitchText";
import SocialSidebar from "./components/SocialSidebar";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen cursor-none">
      <CustomCursor />  
      <SocialSidebar />
      { /* Navigation Bar */ }
      <nav className="fixed top-0 left-0 w-full p-4 bg-[#36404A] text-white shadow-md z-50">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold font-poppins">Anisujjaman Shohan</h1>
          <ul className="flex gap-6 text-sm">
            <li><a href="#home" className="cursor-none hover:text-blue-500 font-poppins">Home</a></li>
            <li><a href="#about" className="cursor-none hover:text-blue-500 font-poppins">About</a></li>
            <li><a href="#blogs" className="cursor-none hover:text-blue-500 font-poppins">Blogs</a></li>
            {/* <li><a href="#contact" className="hover:text-blue-500 font-poppins">Contact</a></li> */}
          </ul>
        </div>
      </nav>

      { /* Hero Section */ }
      <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-[#401F18] text-slate-100">
        <h1 className="text-4xl font-poppins md:text-6xl font-bold mb-4">
          Good day, I am <span className="text-amber-500">Shohan</span>
        </h1>
        <GlitchText text="Aspiring Data Scientist | AI/ML Researcher" />
        <a href="#about" className="cursor-none mt-8 inline-block px-6 py-3 text-sm font-medium font-code text-slate-900 bg-amber-500 rounded-full shadow-md hover:bg-amber-400 transition">
          Explore More ↓
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 min-h-screen bg-[#253D2C]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center font-poppins text-white">About Me</h2>
          <p className="text-lg leading-relaxed text-white text-justify font-poppins mb-6">
            I bring a strong foundation in analytical thinking, quantitative analysis, and mathematical modeling,
            backed by a B.Sc. in Mathematics from Shahjalal University of Science and Technology (SUST),
            and currently pursuing an M.Sc. in Data Science at Bangladesh Univeversity of Engineering and technology (BUET). I’m constantly 
            exploring intersections of data science, machine learning, and computational modeling — looking to contribute to innovative projects,
            research, or industry roles where I can grow and make a meaningful impact. Over the years, I have worked with a variety of
            technologies and tools that have helped me in my journey as a data scientist. Below are some of the key technologies I am proficient in, 
            which I use to solve complex problems and build innovative solutions.
          </p>

          {/* My Stacks */}
          <div className="mb-10">
            <h3 className="text-xl font-semibold mb-4 font-poppins text-white text-center">My Stacks</h3>

            <div className="relative overflow-hidden whitespace-nowrap">
              <div className="flex gap-12 animate-marquee">
                <i className="devicon-cplusplus-plain colored text-5xl" title="C++"></i>
                <i className="devicon-c-plain colored text-5xl" title="C"></i>
                <i className="devicon-python-plain colored text-5xl" title="Python"></i>
                <i className="devicon-matlab-plain colored text-5xl" title="MATLAB"></i>
                <img src="icons/FORTRAN.svg" alt="FORTRAN" title="FORTRAN" className="h-12 w-12 inline-block align-middle"/>
                <i className="devicon-numpy-original colored text-5xl" title="Numpy"></i>
                <i className="devicon-pandas-original colored text-5xl" title="Pandas"></i>
                <img src="icons/seaborn-1.svg" alt="Seaborn" title="Seaborn" className="h-12 w-12 inline-block align-middle"/>
                <img src="icons/plotly-express.svg" alt="Plotly-Express" title="Plotly-Express" className="h-12 w-12 inline-block align-middle"/>
                <img src="icons/matplotlib.svg" alt="Matplotlib" title="Matplotlib" className="h-12 w-12 inline-block align-middle"/>
                <img src="icons/scipy.svg" alt="Scipy" title="Scipy" className="h-12 w-12 inline-block align-middle"/>
                <img src="icons/geopandas_icon.svg" alt="Geopandas" title="Geopandas" className="h-12 w-12 inline-block align-middle"/>
                <i className="devicon-mysql-plain colored text-5xl" title="MySQL"></i>
                <img src="icons/sklearn.svg" alt="Scikit-learn" title="Scikit-Learn" className="h-12 w-12 inline-block align-middle"/>
                <i className="devicon-pytorch-original colored text-5xl" title="PyTorch"></i>
                <i className="devicon-tensorflow-original colored text-5xl" title="TensorFlow"></i>
                <img src="icons/keras.svg" alt="Keras" title="Keras" className="h-12 w-12 inline-block align-middle"/>
                <i className="devicon-linux-plain colored text-5xl" title="Linux"></i>
                <i className="devicon-jupyter-plain colored text-5xl" title="Jupyter Notebook"></i>
                <i className="devicon-git-plain colored text-5xl" title="Git"></i>
                <i className="devicon-github-original colored text-5xl" title="GitHub"></i>
                <i className="devicon-latex-original colored text-5xl" title="LaTeX"></i>
                <i className="devicon-vscode-plain colored text-5xl" title="VS Code"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App