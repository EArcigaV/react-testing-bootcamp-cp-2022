import styled from "styled-components";

export const ContentMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  align-items: flex-start;
  --padding: 30px;
`;

export const DatePickerClass = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  position: absolute;

  align-items: center;
  justify-content: center;
`;

export const Figure = styled.div`
  overflow: hidden;
  border-radius: 30px;
  padding: var(--padding);
  margin-top: 50px;
  color: hsl(200, 50%, 50%);
  /* border-bottom: 1px solid; */
  font-size: 12px;
  h3 {
    color: rgb(11, 191, 240);
  }

  img {
    display: block;
    width: 100%;
    height: 400px;
    /* max-height: 200px; */
    aspect-ratio: 16 / 9;
    object-fit: cover;
    object-position: center;
    transition: 200ms transform ease-in-out;
    border-radius: 30px;
  }
  @media (max-width: 640px) {
    img {
      height: auto;
    }
  }
`;

export const ContentMain2 = styled.div`
  border: none;
  --padding: 30px;
`;

export const Description = styled.div`
  font-size: 0.9rem;
  padding: var(--padding);
  margin-top: 130px;
  @media (max-width: 640px) {
    margin-top: 10px;
  }
`;

export const SubContent = styled.div`
  display: flex;
  margin-top: 1rem;
  padding: var(--padding);
  padding-top: 0;
  justify-content: space-between;
  padding: 0 24px;
`;

export const PhotoTitle = styled.button`
  display: flex;
  position: relative;
  --color: hsl(200, 50%, 50%);
  background: var(--color);
  color: white;
  border: none;
  font-size: 1rem;
  padding: 0.5em 0.75em;
  border-radius: 0.25em;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 640px) {
    margin-bottom: 10px;
  }
`;

// export const PhotoDate = styled.button`
//   background: none;
//   border: 1px solid var(--color);
//   color: var(--color);
// `;
