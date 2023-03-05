import styled from 'styled-components';

export const BodyStyle = styled.section`
  position: relative;
  width: 100vmax;
  height: 100vmax;
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  align-items: center;
  background-color: #000000;

.divContainer{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap:20px;
  padding-left:150px;
  padding-right:150px;
}


`;

export const HeaderStyles = styled.header`
width: 100vmax;
height: 15%;
display: flex;
position: fixed;
top: 0;
flex-direction: row;
justify-content: space-between;
align-items: center;
color: white;
background-color:#000000;
padding: 40px;
z-index:4;

.carQuantity{
  color: #A3A3A6;
  font-weight: lighter;
  padding-left: 45px; 
}



.logoImg{
height: 40px;
}
`;

export const CardStyle = styled.div`
display: flex;
flex-wrap: wrap;
background-color: #FAFAFA;
align-items: center;
justify-content: center;


.card{
  width: 300px;
  height:450px;
  gap: 1em;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 3px;
  background-color: white;
  position: relative;
  padding: 20px;


}
img{
  height: 100%;
  align-self:center;
}
.cardImg{
  width: 240px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin-top: 1em;
  
}
.divButtons{
  display: flex;
  position: absolute;
  bottom: 15px;
  left: 20px;
  align-items: center;
  justify-content: space-between;
  background-color:#F8375D;
  width:250px;
  border-radius:5px;
  padding-right: 20px;

}
input{
    width: 40px;
    height:25px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(204, 204, 204);
    border-radius: 8px;
    color: rgb(51, 51, 51);
    font-family: Roboto;
    font-weight: lighter;
    font-size: 16px;
    line-height: 20px;
    padding: 10px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
}

  button{
    color: white;
    background-color:#F8375D;
    border: none;
    height: 40px;
    border-radius: 5px;
    font-weight: bold;
  }

  .number{
    background-color: #C62C4A;
    height: 40px;
    width: 40px;
    font-weight: lighter;
    color: white;
    padding-top:10px;
    text-align: center;
    border-radius: 5px 0 0 5px;
  }

  .price{
    margin-bottom:70px;
    margin-top:30px;
  }
  p{
    font-weight: 500;
    height: 80px;
  }

`;
export const TableStyle = styled.div`
background-color: black;
align-items: center;
justify-content: center;

.tableContainer{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  background-color:white;
  border-radius: 10px;
}

.closeCart{
  display: flex;
  gap:280px;
  padding: 30px;

}

.totalCart{
  display: flex;
  gap: 10px;
  align-items: center;
}
.totalCart h3{
  color: gray;
}

table{
  background-color:white;
}
th{
  color:gray;
}
button{
    color: white;
    background-color:#F8375D;
    border: none;
    height: 40px;
    border-radius: 5px;
    font-weight: normal;
    padding: 10px;
    align-content: center;
  }
`;
