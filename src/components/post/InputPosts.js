import { useState } from "react";
import styled from 'styled-components';
import avatarImage from './images/avatar.svg';


const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;
  max-width: 300px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;
const Select = styled.select`
width: 100%;
padding: 10px;
border-radius: 5px;
border: 1px solid #ccc;
outline: none;
`;

const InputPosts = ({ Addpost }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [lectorname, setLectorName] = useState('');
  const [avatar, setAvatar] = useState(avatarImage);

  const HandlerTitle = (e) => {
    setTitle(e.currentTarget.value);
  };

  const HandlerDescription = (e) => {
    setDescription(e.currentTarget.value);
  };
  const HandlerLectorName = (e) => {
    setLectorName(e.currentTarget.value);
  };

  const handleImageChange = (e) => {
    setAvatar(URL.createObjectURL(e.target.files[0]));
  };

  const Submithandler = (event) => {
    event.preventDefault();
    let objData = {
      ttl: title,
      lect: lectorname,
      desc: description
    };
    console.log(objData);
    Addpost(objData);
  };

  return (
    <Form onSubmit={Submithandler}>
      <Image src={avatar} alt="Avatar" />
      <Input type="file" onChange={handleImageChange} />
      <Input type="text" placeholder="Title" onChange={HandlerTitle} />
      <Select onChange={HandlerLectorName}>
  <option value="">Select Lector</option>
  <option value="დავითი ბოჭორიშვილი	">დავითი ბოჭორიშვილი	</option>
  <option value="გიორგი ახალაია">გიორგი ახალაია</option>
  <option value="ირაკლი ფირცხალავა">ირაკლი ფირცხალავა</option>
  <option value="სხვა">სხვა</option>
      </Select>      
      <Input type="text" placeholder="Description" onChange={HandlerDescription} />
      <Button type="submit">Accept</Button>
    </Form>
  );
};

export default InputPosts;