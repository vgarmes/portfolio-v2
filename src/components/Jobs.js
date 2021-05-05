import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: date_start, order: DESC }) {
      nodes {
        company
        date_start(formatString: "MMMM YYYY")
        date_end(formatString: "MMMM YYYY")
        description {
          id
          name
        }
        position
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)

  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  const [value, setValue] = React.useState(0)

  const { company, position, date_start, date_end, description } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="experience" />
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={index}
                className={index === value ? "job-btn active-btn" : "job-btn"}
                onClick={() => setValue(index)}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">
            {date_start} - {date_end ? date_end : "Present"}
          </p>
          {description.map(item => {
            return (
              <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{item.name}</p>
              </div>
            )
          })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
