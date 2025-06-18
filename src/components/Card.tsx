import { HiOutlineExternalLink } from 'react-icons/hi'
import ReactGA from 'react-ga4'

ReactGA.initialize(import.meta.env.VITE_GA_MEASUREMENT_ID)
import { cardType } from '../types.ts'

function Card(props: cardType) {
  function useAnalyticsEventTracker() {
    ReactGA.send({
      hitType: 'pageview',
      page: props.link,
      title: props.title,
    })
  }

  return (
    <a
      onClick={useAnalyticsEventTracker}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block border-gray-600 border border-opacity-35 bg-blend-overlay bg-black bg-opacity-25 w-full h-64 overflow-hidden rounded-lg bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${props.photo})` }}
    >
            <span className="absolute right-4 top-4 z-10 items-center rounded-lg bg-[#e7ecef] p-1.5 text-s text-black">
                <HiOutlineExternalLink />
            </span>

      <div className="absolute italic font-light text-gray-200 bottom-4 left-3 pr-20">
        <h3 className="text-2xl font-medium drop-shadow-text">{props.title}</h3>
        <p className="text-sm drop-shadow-text">{props.desc}</p>
        {props.spin && <p className="text-xs drop-shadow-text">(30s spin-up delay)</p>}
      </div>
    </a>
  )
}

export default Card
