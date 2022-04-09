export const NotFound = () => {
  const classes = {
    message: '',
    message1: '',
    message2: '',
  }
  return (
    <main className={classes.message}>
      <p className={classes.message1}>Error: 404</p>
      <p className={classes.message2}>Page not found</p>
    </main>
  )
}
