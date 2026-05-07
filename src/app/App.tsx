import { ExternalLink, CheckCircle2 } from 'lucide-react';
import welcomeImg from '../imports/Welcome.png';
import whatIsImg from '../imports/What_is_0G-Ramp.png';
import importantImg from '../imports/Important_Testnet_Demo.png';
import whatYouNeedImg from '../imports/What_You_Need_Before_Testing.png';
import journeyImg from '../imports/Your_Testing_Journey.png';
import whatToTestImg from '../imports/What_Should_You_Test.png';
import feedbackImg from '../imports/Tell_Us_What_Happened.png';
import thankYouImg from '../imports/Thank_You__Final_CTA.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="pt-16 pb-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <img
              src={welcomeImg}
              alt="Welcome"
              className="w-full rounded-2xl mb-8"
            />
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-4">0G-Ramp Testnet Testing Guide</h1>
              <p className="text-lg text-gray-700 mb-3">
                Thank you for testing 0G-Ramp. This guide will help you understand what the app does, what you need before testing, and what to check while using the demo.
              </p>
              <p className="text-base text-gray-600 mb-8">
                Please read through this guide before opening the app.
              </p>

              {/* Quick Links */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <a
                  href="https://0-g-ramp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                >
                  Demo Link <ExternalLink size={16} />
                </a>
                <a
                  href="https://faucet.0g.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition-colors"
                >
                  Faucet Link <ExternalLink size={16} />
                </a>
                <a
                  href="https://forms.gle/9BBCM4wNR5Pt5Sn38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition-colors"
                >
                  Feedback Form <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is 0G-Ramp Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="mb-4">What is 0G-Ramp?</h2>
                <p className="text-gray-700 leading-relaxed">
                  0G-Ramp helps users move funds into the 0G network in a simpler and more guided way.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  Normally, moving funds into a new blockchain can involve many steps, apps, wallet connections, and network changes. 0G-Ramp is designed to make that process easier to understand and easier to follow.
                </p>
              </div>
              <img
                src={whatIsImg}
                alt="What is 0G-Ramp"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 shadow-sm border border-yellow-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <img
                src={importantImg}
                alt="Important Notice"
                className="w-full rounded-2xl"
              />
              <div>
                <h2 className="mb-4 text-orange-900">Important: This is a Testnet Demo</h2>
                <p className="text-gray-800 mb-4">
                  This demo is only for testing and feedback. That means:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>You are not using real money</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>The payment flow is in test mode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>The KYC flow is in test mode</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">•</span>
                    <span>Some parts may not work perfectly yet</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 font-medium">
                  Please focus on testing the experience and sharing honest feedback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Need Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="mb-6 text-center">What You Need Before Testing</h2>
            <p className="text-center text-gray-700 mb-8">
              Before you start, please make sure you have the following ready:
            </p>

            <img
              src={whatYouNeedImg}
              alt="What You Need Before Testing"
              className="w-full rounded-2xl mb-8"
            />

            <div className="max-w-2xl mx-auto space-y-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-800">A laptop or desktop browser</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-800">MetaMask wallet installed</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-800">0G Galileo testnet added</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-800">Some test 0G tokens</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl">
                <CheckCircle2 className="text-blue-600 shrink-0 mt-0.5" size={20} />
                <span className="text-gray-800">The demo link</span>
              </div>
            </div>

            <p className="text-center text-sm text-gray-600 mt-6 bg-gray-50 p-4 rounded-xl max-w-2xl mx-auto">
              Chrome is recommended. The app may help add the 0G Galileo testnet automatically when you connect your wallet.
            </p>
          </div>
        </div>
      </section>

      {/* Testing Journey Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 shadow-sm">
            <h2 className="mb-6 text-center">Your Testing Journey</h2>
            <p className="text-center text-gray-700 mb-8">
              Follow this simple testing flow from start to finish.
            </p>

            <img
              src={journeyImg}
              alt="Your Testing Journey"
              className="w-full rounded-2xl mb-8"
            />

            <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-4">
              {[
                'Open the app',
                'Connect your wallet',
                'Add or switch to 0G Galileo testnet',
                'Get test tokens',
                'Start a test transaction',
                'Follow the payment / KYC flow',
                'Check your transaction status',
                'Find your receipt or proof'
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-xl">
                  <div className="flex items-center justify-center w-7 h-7 bg-purple-600 text-white rounded-full shrink-0 text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-800 pt-0.5">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Should You Test Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h2 className="mb-6 text-center">What Should You Test?</h2>
            <p className="text-center text-gray-700 mb-8">
              While testing, please pay attention to the following:
            </p>

            <img
              src={whatToTestImg}
              alt="What Should You Test"
              className="w-full rounded-2xl mb-8"
            />

            <div className="max-w-3xl mx-auto space-y-3">
              {[
                'Can you open the app easily?',
                'Can you connect your wallet?',
                'Does the app help you add or switch to 0G Galileo testnet?',
                'Can you start a test transaction?',
                'Can you follow the payment / KYC flow?',
                'Can you see your transaction status?',
                'Can you find the receipt or proof?',
                'Did anything confuse you?',
                'Did anything break?',
                'What would make the app easier to use?'
              ].map((question, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-800">{question}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 shadow-sm border border-green-200">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="mb-4">Tell Us What Happened</h2>
                <p className="text-gray-700 mb-4">
                  After testing, please share your feedback with us. We would like to know:
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>What you liked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>What confused you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>What did not work</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>What page felt hard to understand</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>What you think we should improve first</span>
                  </li>
                </ul>
                <a
                  href="https://forms.gle/9BBCM4wNR5Pt5Sn38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                >
                  Submit Feedback <ExternalLink size={18} />
                </a>
                <p className="text-sm text-gray-600 text-center mt-3">
                  Please fill in the questionnaire after testing.
                </p>
              </div>
              <img
                src={feedbackImg}
                alt="Tell Us What Happened"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-12 pb-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-3xl p-8 shadow-lg">
            <img
              src={thankYouImg}
              alt="Thank You"
              className="w-full rounded-2xl mb-8"
            />
            <div className="text-center">
              <h2 className="mb-4 text-white">Thank You for Helping Us Improve 0G-Ramp</h2>
              <p className="text-blue-100 mb-8 text-lg">
                Your feedback helps us make 0G-Ramp simpler, clearer, and easier for everyone to use.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
                <a
                  href="https://0-g-ramp.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  Demo Link <ExternalLink size={16} />
                </a>
                <a
                  href="https://faucet.0g.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  Faucet Link <ExternalLink size={16} />
                </a>
                <a
                  href="https://forms.gle/9BBCM4wNR5Pt5Sn38"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 transition-colors"
                >
                  Feedback Form <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
