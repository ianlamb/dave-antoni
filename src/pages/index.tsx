import * as React from 'react'
import Obfuscate from 'react-obfuscate'
import type { HeadFC, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { Section } from '../components/Section'
import { Divider } from '../components/Divider'

const pageStyles = {
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
}

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Section className="flex items-center text-center text-gold px-8">
        <div className="mb-24 lg:mb-0 lg:float-left">
          <h1 className="text-3xl lg:text-4xl font-fancy leading-[2] my-24 lg:my-36">
            Stacey Dominique
            <br />
            and
            <br />
            Jeffrey James
          </h1>
          <p className="text-xl">
            We're getting married, join us in celebration!
            <br />
            <br />
            <strong>Sunday, November 12th, 2023</strong>
            <br />
            <strong>The Four Seasons Resort, Orlando Florida</strong>
          </p>
        </div>
        <StaticImage
          src="../images/headshots_2.jpg"
          alt="Headshots"
          placeholder="blurred"
          className="w-full max-h-[100vh] lg:float-right lg:w-[50%]"
        />
        <div className="clear-both"></div>
        <Divider className="mt-16 mb-8 hidden lg:flex" />
      </Section>
      <Section className="py-12 px-8">
        <h2 className="text-4xl font-bold mb-6">The Event</h2>
        <p className="text-lg mb-6">
          Please RSVP by emailing{' '}
          <Obfuscate
            email="wedding@scsporter.com"
            headers={{
              subject: 'Porter Trunick Wedding RSVP',
            }}
          />
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12 lg:mb-0">
          <div className="">
            <h3 className="text-3xl mb-2">Wedding Venue</h3>
            <p className="text-lg">
              The Wedding ceremony and reception will be held at the{' '}
              <a href="https://goo.gl/maps/5hYAmbmQrWzTTsMu9">
                Four Seasons Resort Orlando at Walt Disney World® Resort
              </a>
              .
            </p>
            <p className="text-lg font-bold italic mt-2">BLACK TIE</p>
          </div>
          <div className="">
            <h3 className="text-3xl mb-2">Ceremony</h3>
            <p className="text-lg">
              The ceremony will begin at 3:30pm EST in [location]. Please see venue map below.
            </p>
          </div>
          <div className="">
            <h3 className="text-3xl mb-2">Reception</h3>
            <p className="text-lg">
              The reception will begin at [time] EST in [location]. Please see venue map below.
            </p>
          </div>
        </div>
        <a href="../images/venue_map.jpg">
          <StaticImage
            src="../images/venue_map.jpg"
            alt="Venue Map"
            placeholder="blurred"
            layout="fullWidth"
          />
        </a>
      </Section>
      <Section className="py-12 px-8">
        <h2 className="text-4xl font-bold mb-6">Accomodations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="">
            <h3 className="text-3xl mb-2">Four Seasons Resort</h3>
            <p className="text-lg mb-2">
              We have a number of Four Seasons Resort Rooms (standard rooms)
              blocked for the night of the wedding 12th November 2023 for our
              guests, extra nights can be added.
            </p>
            <p className="text-lg mb-2">
              Should you wish to book your accommodation at the Four Seasons
              please contact the resort directly on +1-800-267-3046 to reserve
              your stay.
              <br />A deposit is due at time of booking.
              <br />
              Remember to say you are with the "Porter Trunick Wedding" to
              receive the discounted group rate.
            </p>
          </div>
          <div className="">
            <h3 className="text-3xl mb-2">Animal Kingdom Lodge</h3>
            <p className="text-lg mb-2">
              As a nod to our South African heritage, we will be staying at{' '}
              <a href="https://goo.gl/maps/TD9dXT2jmMStjBGL7" target="_blank">
                Disney’s Animal Kingdom Lodge
              </a>{' '}
              Deluxe Villa Resort from the 9th November 2023 to the 14th
              November 2023.
            </p>
            <p className="text-lg mb-2">
              Should you wish to book your accommodation at Disney’s Animal
              Kingdom Lodge Resort, any other Disney World Resort or one of the
              many nearby hotels please contact the Wedding Travel Agent Patsy
              Jordan directly on +1-806-570-3000 or email
              patsy@cruisebrothers.com.
              <br />
              A deposit is due at time of booking.
              <br />
              Remember to say you are with the "Porter Trunick Wedding" to
              receive discounted rates for Animal Kingdom Lodge.
            </p>
          </div>
          <div className="">
            <h3 className="text-3xl mb-2">Transportation</h3>
            <p className="text-lg mb-2">
              You will require transportation during your stay which includes to
              and from the airport as well as between your resort/hotel and the
              wedding venue if you are not staying at the Four Seasons. This and
              all other travel requirements including park tickets can be
              arranged via the wedding Travel Agent Patsy Jordan.
            </p>
            <p className="text-lg mb-2">
              Transportations Options include:
              <ul className="list-disc pl-4">
                <li>Car rental</li>
                <li>Limo Service</li>
                <li>Sunshine Flyer</li>
                <li>Mears Bus</li>
                <li>Uber and Lyft (via their apps)</li>
              </ul>
            </p>
          </div>
        </div>
      </Section>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Porter Trunick Wedding</title>
