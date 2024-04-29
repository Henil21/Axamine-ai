import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import styles from "./page.module.css";
import About from "./components/About/about";
import Benifits from "./components/Benifits/benifits";
import Team from "./components/Team/team";
import FormComponent from "./components/Form/form";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <main className={styles.main}>
      
      <section>
        <Navbar />
      </section>
      
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
      
      <section id="footer" className={styles.footerWrapper}>
        <Footer />
      </section>
      
    </main>
  );
};

export default App;
