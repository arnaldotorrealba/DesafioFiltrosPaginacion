const prepareHateoas = async (entity, data, limit = data.length) => {
  let stockTotal = 0
  const results = data.map(j => {
    stockTotal += j.stock
    return {
      name: j.nombre,
      href: `/joyas/${entity}/${j.id}`
    }
  })
  const HATEOAS = {
    totalJoyas: Number(limit),
    stockTotal,
    results
  }
  return HATEOAS
}

export default prepareHateoas
