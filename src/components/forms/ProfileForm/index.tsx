import React, { useState } from 'react';
import '../../styles/ProfilePage.css';
import Modal from 'react-modal';
import { updateUser } from '../../../api/users';

interface ProfileFormProps {
  name: string;
  email: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ name, email }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newPassword, setNewPassword] = useState("");


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      
      const formData = new FormData();
      formData.append('name', newName);
      formData.append('email', newEmail);
      formData.append('password', newPassword);

      const result = await updateUser(formData);
      if (result.status === 200) {
        alert('Usuário alterado com sucesso!');
        closeModal();
        window.location.reload(); // Recarrega a página
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <div>
        <h2>Meu perfil</h2>
          <p>
            <span>Nome</span>{' '}
            <br/>
            <span>{name}</span>
          </p>
          <p>
            <span>E-mail</span>{' '}
            <br/>
            <span>{email}</span>
          </p>
          <button onClick={openModal}>
            Alterar Dados
          </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Alterar Dados Modal"
        className="custom-modal"
        overlayClassName="custom-OverlayClass"
      >
        <div className="modal-content">  
        <h2>Alterar Dados</h2>
        <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <br/>
              <input
                type="text"
                value={newName}
                required={true}
                onChange={handleNameChange}
              />
              <br/>
            </label>
            <label>
              E-mail:
              <br/>
              <input
                type="text"
                value={newEmail}
                required={true}
                onChange={handleEmailChange}
              />
              <br/>
            </label>
            <label>
              Senha:
              <br/>
              <input
                type="password"
                value={newPassword}
                required={true}
                onChange={handlePasswordChange}
              />
              <br/>
            </label>
            <div className="modal-buttons">
              <button className="save-button">
                Salvar
              </button>
              <button className="close-button" onClick={closeModal}>
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ProfileForm;
