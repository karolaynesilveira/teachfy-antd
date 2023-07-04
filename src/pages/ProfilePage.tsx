import ProfileForm from "../components/forms/ProfileForm";
import storage from "../utils/storage";

const ProfilePage = () => {
  return (
    <ProfileForm name={storage.getUser().name} email={storage.getUser().email}/>
  );
};

export default ProfilePage;