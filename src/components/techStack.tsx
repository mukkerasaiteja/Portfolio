function techStack({ techStack }: { techStack: string[] }) {
  return (
    <div>
      {techStack.map((tech, index) => (
        <span key={index}>{tech}</span>
      ))}
    </div>
  )
}

export default techStack
