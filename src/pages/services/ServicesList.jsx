import React from 'react'
import servicesData from './servicesData'
import { Link , useLocation} from 'react-router-dom'

const ServicesList = () => {

  const location = useLocation()
  console.log(location)

  const data = servicesData.map(data => {
    return (
      <div key={data._id}>
        <h3>
          <Link to={`/services/${data._id}`}>{data.name} </Link> - <small> ${data.price}</small>
        </h3> 
      </div>
    )
  })



  return (
    <div>
      <h1>Services List Page</h1>
      {data}
    </div>
  )
}

export default ServicesList

