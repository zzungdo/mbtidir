const MBTI = {
    "INTJ":{
        name:"INTJ",
        label:"용의주도한 전략가",
        desc:["의지가 강하고, 독립적이다","분석력이 뛰어나다"]
    },
    "INTP":{
        name:"INTP",
        label:"논리적인 사색가",
        desc:["지적 호기심이 높다","잠재력과 가능성을 중요시한다"]
    },
    "ENTJ":{
        name:"ENTJ",
        label:"대담한 통솔자",
        desc:["철저한 준비를 하며, 활동적이다","통솔력이 있으며, 단호하다"]
    },
    "ENTP":{
        name:"ENTP",
        label:"뜨거운 논쟁을 즐기는 변론가",
        desc: ["박학다식하고,독창적이다","끊임없이 새로운 시도를 한다"]

    },
    "INFJ":{
        name:"INFJ",
        label:"선의의 옹호자",
        desc:["높은 통찰력으로 사람들에게 영감을 준다","공동체의 이익을 중요시한다"]
    },
    "INFP":{
        name:"INFP",
        label:"열정적인 중재자",
        desc: ["성실하고 이해심이 많으며, 개방적이다","잘 표현하지 않으나, 내적 신념이 강하다"]
    },
    "ENFJ":{
        name:"ENFJ",
        label:"정의로운 사회운동가",
        desc: ["사교적이고, 타인의 의견을 존중한다","비판을 받으면 예민하게 반응한다"]
    },
    "ENFP":{
        name:"ENFP",
        label:"재기발랄한 활동가",
        desc: ["상상력이 풍부하고, 순발력이 뛰어나다","일상적인 활동에 지루함을 느낀다"]
    },
    "ISTJ":{
        name:"ISTJ",
        label:"청렴결백한 논리주의자",
        desc:["책임감이 강하며, 현실적이다","매사에 철저하고 보수적이다"]
    },
    "ISFJ":{
        name:"ISFJ",
        label:"용감한 수호자",
        desc: ["차분하고 헌신적이며, 인내심이 강하다","타인의 감정변화에 주의를 기울인다"]

    },
    "ESTJ":{
        name:"ESTJ",
        label:"엄격한 관리자",
        desc:["체계적으로 일하고, 규칙을 준수한다","사실적 목표 설정에 능하다"]
    },
    "ESFJ":{
        name:"ESFJ",
        label:"사교적인 외교관",
        desc: ["사람에 대한 관심이 많다","친절하다, 동정심이 많다"]
    },
    "ISTP":{
        name:"ISTP",
        label:"만능 재주꾼",
        desc: ["과묵하고 분석적이다.","적응력이 강하다"]
    },
    "ISFP":{
        name:"ISFP",
        label:"호기심 많은 예술가",
        desc: ["온화하고 겸손하다","삶의 여유를 만끽한다"]
    },
    "ESTP":{
        name:"ESTP",
        label:"모험을 즐기는 사업가",
        desc: ["느긋하고, 관용적이며, 타협을 잘한다","현실적 문제 해결에 능숙하다"]
    },
    "ESFP":{
        name:"ESFP",
        label:"자유로운 영혼의 연예인",
        desc: ["호기심이 많으며, 개방적이다","구체적인 사실을 증명한다"]
    }
}
let selectedMbti = MBTI.ISFJ;




function init(){
    const btnElems = document.querySelectorAll('.btn-section button')
    const titleSection = document.querySelector('.title-section h2')
    const descSection = document.querySelector('.desc-section ul')
    let desclist ='';


    for (let i = 0; i < btnElems.length; i++){
        if (btnElems[i].textContent === selectedMbti.name){
            btnElems[i].classList.add('active')
        }
    }

    for (let i = 0; i < selectedMbti.desc.length; i++){
        desclist += `<li>${selectedMbti.desc[i]}</li>`
    }
    descSection.innerHTML = desclist
    titleSection.textContent = selectedMbti.label
    

    
    
    for (let i = 0; i < btnElems.length; i++){
        btnElems[i].addEventListener('click',function(event){
            //익명함수

            selectedMbti = MBTI[event.target.textContent]
            titleSection.textContent = selectedMbti.label
            desclist ='';

            for (let i = 0; i < btnElems.length; i++){
                btnElems[i].classList.remove('active')
            }
            
            for (let i = 0; i < btnElems.length; i++){
                if (btnElems[i].textContent === selectedMbti.name){
                    btnElems[i].classList.add('active')
                }
            }

            for (let i = 0; i < selectedMbti.desc.length; i++){
                desclist += `<li>${selectedMbti.desc[i]}</li>`
            }
            
            
            descSection.innerHTML = desclist
        })
    }
    

}

init()