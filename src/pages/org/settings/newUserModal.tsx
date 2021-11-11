import { useState } from "react";

interface IProps {
  visible: boolean;
  setVisible: (v: boolean) => void;
  action: (n: string, p: string) => any;
}
const NewUserModal = ({ visible, setVisible, action }: IProps) => {
  const [name, setName] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirmPassword, setConfirmPassword] = useState<string>();

  const handleClick = () => {
    if (name && password === confirmPassword) {
      setVisible(false);
      action(name, password);
    }
  };

  return (
    <>
      {visible && (
        <>
          <div className="backdrop" onClick={() => setVisible(false)}></div>
          <div className="modal">
            <h2>New Staff User</h2>
            <input
              type="text"
              placeholder="username"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="confirmPassword"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={handleClick} className="save">
              SAVE
            </button>
          </div>
        </>
      )}
    </>
  );
};

export { NewUserModal };
