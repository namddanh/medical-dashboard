import { useEffect } from "react";
import styled from "styled-components";

type ModalProps = {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  z-index: 1000;
`;

const Box = styled.div`
  width: min(720px, 100%);
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadow.card};
  overflow: hidden;
`;

const Header = styled.div`
  padding: ${({ theme }) => theme.space[4]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Title = styled.h4`
  margin: 0;
  font-size: 18px;
`;

const Body = styled.div`
  padding: ${({ theme }) => theme.space[4]};
`;

const Modal = ({ open, title, children, onClose }: ModalProps) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;

    const preOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = preOverflow;
    };
  }, [open]);

  if (!open) return null;

  return (
    <Overlay
      // NOTE // e.target is what you clicked, e.currentTarget is the overlay itself
      // So if what you clicked is the overlay, close the modal
      role="dialog"
      aria-modal="true"
      aria-label={`${title} Modal`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Box>
        <Header>
          <Title>{title}</Title>
          <button onClick={onClose}>Close</button>
        </Header>
        <Body>{children}</Body>
      </Box>
    </Overlay>
  );
};

export default Modal;
