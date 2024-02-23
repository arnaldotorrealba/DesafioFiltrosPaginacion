const getReport = async (req, res, next) => {
  const params = req.query
  console.log(params)
  const url = req.url
  console.log(
    `Hoy ${new Date()}
    se ha recibido una consulta de la ruta ${url}
    con los parámetros:`,
    params
  )
  next()
}

export { getReport }
