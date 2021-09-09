import { Wrapper } from "./Toggle.style";

export type ToggleProps = {
  toggle: boolean;
  handleToggle: () => void;
};

function Toggle({ toggle, handleToggle }: ToggleProps) {
  return (
    <Wrapper
      onClick={() => handleToggle()}
      handleToggle={handleToggle}
      toggle={toggle}
    >
      <div className="circle"></div>
      <div className="back"></div>
    </Wrapper>
  );
}

export default Toggle;
