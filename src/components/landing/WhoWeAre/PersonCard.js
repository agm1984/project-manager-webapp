import React from 'react'

const PersonCard = (props) => {
  const { person, type } = props
  if (type === 'bigLeft') {
    return (
      <div className="whoWeAre_person-card">
        <div className="whoWeAre_person-photoWrapper photoLeft">
          <img
            className="whoWeAre_photo"
            src={person.photo}
            alt={person.name}
          />
        </div>
        <div className="whoWeAre_person-detailsWrapper detailsRight">
          <h2 className="whoWeAre_person-name">{person.name.toUpperCase()}</h2>
          <h3 className="whoWeAre_person-title">{person.title.toUpperCase()}</h3>
          {person.text.map((p, i) => (
            <p className="whoWeAre_person-text" key={i}>{p}</p>
          ))}
          <a className="whoWeAre_contact" href="#contact_message">
            GET IN TOUCH
          </a>
        </div>
      </div>
    )
  }
  if (type === 'bigRight') {
    return (
      <div className="whoWeAre_person-card">
        <div className="whoWeAre_person-detailsWrapper detailsLeft">
          <h2 className="whoWeAre_person-name">{person.name.toUpperCase()}</h2>
          <h3 className="whoWeAre_person-title">{person.title.toUpperCase()}</h3>
          {person.text.map((p, i) => (
            <p className="whoWeAre_person-text" key={i}>{p}</p>
          ))}
          <a className="whoWeAre_contact" href="#contact_message">
            GET IN TOUCH
          </a>
        </div>
        <div className="whoWeAre_person-photoWrapper photoRight">
          <img
            className="whoWeAre_photo"
            src={person.photo}
            alt={person.name}
          />
        </div>
      </div>
    )
  }
  if (type === 'small') {
    return (
      <div className="whoWeAre_person-cardSmall">
        <div className="whoWeAre_person-photoWrapperSmall">
          <img
            className="whoWeAre_photoSmall"
            src={person.photo}
            alt={person.name}
          />
        </div>
        <div className="whoWeAre_person-detailsWrapperSmall">
          <h2 className="whoWeAre_person-nameSmall">{person.name.toUpperCase()}</h2>
          <h3 className="whoWeAre_person-titleSmall">{person.title.toUpperCase()}</h3>
          {person.text.map((p, i) => (
            <p className="whoWeAre_person-textSmall" key={i}>{p}</p>
          ))}
        </div>
      </div>
    )
  }
}

export default PersonCard
