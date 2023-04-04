import PropTypes from 'prop-types';
import css from '../Section/Style.module.css';

export const Section = ({ staticTitle, staticChildren, title, children }) => {
  return (
    <section>
      <h2 className={css.title}>{staticTitle}</h2>
      {staticChildren}
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
