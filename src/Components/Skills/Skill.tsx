const Skill = ({ Icon, skilltitle }) => {
  return (
    <div className="single_skill stack1 stack1Comp">
      <Icon className="skill_icon_comp" />
      <p className="skill_name">{skilltitle}</p>
    </div>
  );
};

export default Skill;
