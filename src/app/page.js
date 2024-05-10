import Home from "./components/Home/home";
import styles from "./page.module.css";
import About from "./components/About/about";
import Benifits from "./components/Benifits/benifits";
import Team from "./components/Team/team";
import FormComponent from "./components/Form/form";


const App = () => {
  return (
    <main className={styles.main}>
      
      <section id="home">
        <Home />
      </section>
      
      <section id="about">
        <About />
      </section>
      
      <section id="benifits">
        <Benifits />
      </section>
      
      <section id="team">
        <Team />
      </section>
      
      <section id="contact" className={styles.formWrapper}>
        <FormComponent />
      </section>
    
    </main>
  );
};

export default App;
