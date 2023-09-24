import './styles.scss';

const PageHeaderContent = (props) => {
  const { headerText, icon } = props;
  return (
    <>
      <div className="warpper">
        <h2>{headerText}</h2>
        <span>{icon}</span>
      </div>
    </>
  );
};

export default PageHeaderContent;
