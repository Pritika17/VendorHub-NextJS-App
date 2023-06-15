
import Card from "./Card"

const VendorProfile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>
      <div className="mt-10 profile_layout">
      {data.map((profile) => (
        <Card
          key={profile._id}
          profile={profile}
          handleEdit={() => handleEdit && (handleEdit(profile))}
          handleDelete={() => handleDelete && (handleDelete(profile))}
        />
      ))}
    </div>
    </section>
  )
}

export default VendorProfile