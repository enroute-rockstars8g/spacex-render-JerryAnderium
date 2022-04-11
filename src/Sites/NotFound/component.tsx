export const NotFound = () => {
  const classes = {
    message1: '',
    message2: '',
  }
  return (
    <div style={{color: 'white', background: '#1D1D1D', padding: '25px'}}>
      <p className={classes.message1}>Error: 404</p>
      <p className={classes.message2}>Page not found</p>
    </div>
  )
}
