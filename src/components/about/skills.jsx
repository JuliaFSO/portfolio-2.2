import './about.css';

export default function Skills() {
  return (
    <div className='section_skills'>
      <div className='sub_title'>SKILLS</div>
      <div className='skill_column'>
        <div>
          <span className='skill_text'>Javascript</span>
          <div className='chart_bar'>
            <span className='item_progress' data-percent="70" style={{width: '70%'}}></span>
            <span className='percent' style={{right: '30%'}}>70%<span className='arrow'></span></span>
          </div>
        </div>
        <div>
          <span className='skill_text'>React.js</span>
          <div className='chart_bar'>
            <span className='item_progress' data-percent="80" style={{width: '80%'}}></span>
            <span className='percent' style={{right: '20%'}}>80%<span className='arrow'></span></span>
          </div>
        </div>
        <div>
          <span className='skill_text'>Next.js</span>
          <div className='chart_bar'>
            <span className='item_progress' data-percent="40" style={{width: '40%'}}></span>
            <span className='percent' style={{right: '60%'}}>40%<span className='arrow'></span></span>
          </div>
        </div>
        <div>
          <span className='skill_text'>HTML</span>
          <div className='chart_bar'>
            <span className='item_progress' data-percent="90" style={{width: '90%'}}></span>
            <span className='percent' style={{right: '10%'}}>90%<span className='arrow'></span></span>
          </div>
        </div>
        <div>
          <span className='skill_text'>CSS</span>
          <div className='chart_bar'>
            <span className='item_progress' data-percent="70" style={{width: '70%'}}></span>
            <span className='percent' style={{right: '30%'}}>70%<span className='arrow'></span></span>
          </div>
        </div>
      </div>
      <div className='skill_column'>
        <div>
          <span className='skill_text'>Ruby on Rails</span>
          <div className='chart_bar'>
            <span className='item_progress' data-percent="60" style={{width: '60%'}}></span>
            <span className='percent' style={{right: '40%'}}>60%<span className='arrow'></span></span>
          </div>
        </div>
        <div>
          <span className='skill_text'>PostgreSQL</span>
          <div className='chart_bar'>
            <span className='item_progress' data-percent="40" style={{width: '40%'}}></span>
            <span className='percent' style={{right: '60%'}}>40%<span className='arrow'></span></span>
          </div>
        </div>
        <div>
          <span className='skill_text'>Node.js</span>
          <div className='chart_bar'>
            <span className='item_progress' data-percent="50" style={{width: '50%'}}></span>
            <span className='percent' style={{right: '50%'}}>50%<span className='arrow'></span></span>
          </div>
        </div>
        <div>
          <span className='skill_text'>Redux</span>
          <div className='chart_bar'>
            <span className='item_progress' data-percent="35" style={{width: '35%'}}></span>
            <span className='percent' style={{right: '65%'}}>40%<span className='arrow'></span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
