import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
   opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const translateDown = keyframes`
    0%   {  
        transform: translateY(-80px) scale(1.01); 
    }
    100% {     
        transform: translateY(0) scale(1); 
    }
`;

export const translateUp = keyframes`
    0%    {  
        transform: translateY(0); 
    }
    100% {      
        transform: translateY(-80px);
    }
`;

export const scaleUp = keyframes`
    0%{ 
        transform: scale(1);
    }

    30%{

        transform: scale(1.017);
    }

    100%{
        transform: scale(1.01);
    }
`;

export const scaleUpAlt = keyframes`
    0%{ 
        transform: scale(1) translateY(190px);
    }

    30%{

        transform: scale(1.017) translateY(190px);
    }

    100%{
        transform: scale(1.01) translateY(190px);
    }
`;

export const scaleDown = keyframes`
    0%{ 
        transform: scale(1.01);
    }

    100%{
        transform: scale(1);
    }
`;

export const cardSpread1 = keyframes`
  0%{
    transform: scale(1) translateY(-20px);
  }

  100%{
    transform: scale(1) translateY(-80px);
    
  }
`;

export const cardSpread1Rev = keyframes`
  0%{
    transform: translateY(-80px);
  }

  100%{
    transform: scale(1) translateY(-20px);
  }
`;

export const cardSpread2 = keyframes`
  0%{
    transform: scale(0.9) translateY(20px);
  }

  100%{
    transform: scale(0.9) translateY(-10px);  
  }
`;

export const cardSpread2Rev = keyframes`
  0%{
    transform: scale(0.9) translateY(-10px); 
  }

 100%{
    transform: scale(0.9) translateY(20px);
  }
`;
