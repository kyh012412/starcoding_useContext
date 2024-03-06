import Content from './Content';
import Footer from './Footer';
import Header from './Header';

const Page = ({isDark,toggleDarkness}) =>{
  return (
    <div className='page'>
      <Header isDark={isDark} />
      <Content isDark={isDark} />
      <Footer isDark={isDark} toggleDarkness={toggleDarkness} />
    </div>
  );
}

export default Page;
