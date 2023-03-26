import PropTypes from 'prop-types';
import css from '../Section/Style.module.css';

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
