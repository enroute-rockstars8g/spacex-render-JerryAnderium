export const ErrMsg = () => {
  const classes = {
    errMsg: ''
  };

  return (
    <div className={classes.errMsg}>
      <p style={{color: 'white', background: '#1D1D1D', padding: '25px'}}>Sorry, there was an error.</p>
    </div>
  );
};
