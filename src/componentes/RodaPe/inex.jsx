import styled from "styled-components"
import social from './sociais.json'


const Rodape = styled.footer`
    background: rgba(4, 36, 79, 1);
    padding: 30px 50px;
    color: rgba(255, 255, 255, 1);
`
const AlinhamentoFooter = styled.section`

    display: flex;
    justify-content: space-between;
    margin-left: 10px;
    margin-right: 10px;
`
const ContainerIcones = styled.div`

    display: flex;
    gap: 20px;
`
const Desen = styled.p`
    font-size:22px;
`

const RodaPe = () =>{
    return(
        
        <Rodape>

            <AlinhamentoFooter>

                <ContainerIcones>

                    {social.map(soci => 
                    <a href={soci.href}>

                        <img src={soci.path} alt='' /> 

                    </a>)}

                </ContainerIcones>


                <Desen>Desenvolvido por Jonathan</Desen>

            </AlinhamentoFooter>

        </Rodape>
        
        
    )

}

export default RodaPe