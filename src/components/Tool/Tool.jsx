
import './Tool.css'


const Tool = () => {

    return (
        <section className='services section' id="Tool">
            <h2 className='section__title'>Tool</h2>
            <span className='section__subtitle'>I get used</span>

            <div className='services__container container grid'>
            <div className='skills__box'>
                    <div className='skills__data'>
                        <div>
                            <img className='skills__name' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="HTML" />
                            <span className='skills__level'>Gut Hub</span> 
                        </div>
                    </div>
                    <div className='skills__data'>
                        <div>
                            <img className='skills__name' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" alt="CSS" />
                            <span className='skills__level'>VS Code</span> 
                        </div>
                    </div>
                    <div className='skills__data'>
                        <div>
                            <img className='skills__name' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="js" />
                            <span className='skills__level'>Docker</span> 
                        </div>
                    </div>
                    <div className='skills__data'>
                        <div>
                            <img className='skills__name' src="https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667" alt="HTML" />
                            <span className='skills__level'>Postman</span> 
                        </div>
                    </div>
                    <div className='skills__data'>
                        <div>
                            <img className='skills__name' src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png" alt="HTML" />
                            <span className='skills__level'>Jira</span> 
                        </div>
                    </div>
                    <div className='skills__data'>
                        <div>
                            <img className='skills__name' src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="HTML" />
                            <span className='skills__level'>Slack</span> 
                        </div>
                    </div>
            </div> 

                
                
            </div>
        </section>
    )
}

export default Tool