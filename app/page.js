import Image from 'next/image'
import S1_text_group from './components/S1_text_group'
import Project from './components/Project'
import Form from './components/Form'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      {/* CTA / Nav */}
      <header
        id='top'
        className='hero_bg h-screen desktop:h-[1428px] flex items-center justify-center desktop:items-start'
      >
        <div className='flex flex-col items-center desktop:pt-[254px]'>
          <div>
            <h1 className='title_large'>Jacob P.</h1>
            <p className='header mt-6 text-center'>
              Web developer and designer
            </p>
          </div>
          <nav>
            <ul className='flex flex-col desktop:flex-row mt-12 text-center space-y-[24px] desktop:space-y-0 desktop:space-x-[24px]'>
              <li>
                <a className='nav_btn' href='#'>
                  about
                </a>
              </li>
              <li>
                <a className='nav_btn' href='#'>
                  projects
                </a>
              </li>
              <li>
                <a className='nav_btn' href='#'>
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* introduction */}
      <section className='container glass_bg  flex items-center justify-center desktop:absolute desktop:left-1/2 desktop:transform desktop:-translate-x-1/2 desktop:translate-y-[-712px] desktop:rounded-br-[20px] desktop:rounded-bl-[20px]'>
        <div className='grid medium:grid-cols-2 gap-[123px] py-[123px] desktop:pt-[150px] desktop:pb-[160px]'>
          <S1_text_group
            icon={'/icons/pentool.svg'}
            heading={'UI & UX Designer'}
            body={`As a web designer, I combine creativity and functionality to create visually pleasing, user-focused sites. I strive to deliver smooth digital experiences that effectively engage users.`}
          />
          <S1_text_group
            icon={'/icons/code.svg'}
            heading={'Next JS Developer'}
            body={`I thrive on embracing trends and cutting-edge tech, using advanced frameworks and efficient code to create websites that excel in performance and user engagement.`}
          />
          <S1_text_group
            icon={'/icons/data.svg'}
            heading={'Innovation and Adaptation'}
            body={`The digital landscape is ever-evolving, and I thrive on staying at the forefront of industry trends and technologies. From resp`}
          />
          <S1_text_group
            icon={'/icons/chart.svg'}
            heading={'A Commitment to Excellence'}
            body={`Transparency, creativity, and a relentless commitment to quality are at the core of my work ethic. When you choose to collaborate with me, yoring`}
          />
        </div>
      </section>

      {/* projects */}
      <section className='container  desktop:mt-[95px]'>
        <div className='space-y-[132px] medium:space-y-[148px]'>
          {/* each */}
          <Project
            project_preview={''}
            title={'AudioTechnical'}
            heading={'Next Js, Tailwind css, Hostzinger, Api database'}
            body={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum enim nec urna fermentum, in egestas odio porta. Cras sit amet mi consequat, semper purus eget, accumsan lorem. In viverra diam metus.'
            }
          />
          <Project
            project_preview={''}
            title={'AudioTechnical'}
            heading={'Next Js, Tailwind css, Hostzinger, Api database'}
            body={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum enim nec urna fermentum, in egestas odio porta. Cras sit amet mi consequat, semper purus eget, accumsan lorem. In viverra diam metus.'
            }
          />
          <Project
            project_preview={''}
            title={'AudioTechnical'}
            heading={'Next Js, Tailwind css, Hostzinger, Api database'}
            body={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum enim nec urna fermentum, in egestas odio porta. Cras sit amet mi consequat, semper purus eget, accumsan lorem. In viverra diam metus.'
            }
          />
          <Project
            project_preview={''}
            title={'AudioTechnical'}
            heading={'Next Js, Tailwind css, Hostzinger, Api database'}
            body={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum enim nec urna fermentum, in egestas odio porta. Cras sit amet mi consequat, semper purus eget, accumsan lorem. In viverra diam metus.'
            }
          />
        </div>
      </section>

      {/* contact */}
      <Form />

      {/* footer */}
      <Footer />
    </main>
  )
}
