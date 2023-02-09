import { useState } from 'react';
import Container from './container';

export default function Video() {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <Container>
      <div className="table-amb-container">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-orange-700 text-white">
              <th className="px-4 py-2">20 - 25+ Referrals</th>
              <th className="px-4 py-2">16-20 Referrals</th>
              <th className="px-4 py-2">11 - 15 Referrals</th>
              <th className="px-4 py-2">6 - 10 Referrals</th>
              <th className="px-4 py-2">2 - 5 Referrals</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white-100">
              <td className="border px-4 py-2">Certificate of appreciation</td>
              <td className="border px-4 py-2">Certificate of Merit</td>
              <td className="border px-4 py-2">Certificate of Merit</td>
              <td className="border px-4 py-2">Participation Certificate</td>
              <td className="border px-4 py-2">Participation Certificate</td>
            </tr>
            <tr className="bg-white-200">
              <td className="border px-4 py-2">
                Gift/discount coupon worth 1000 INR
              </td>
              <td className="border px-4 py-2">
                Gift/discount coupon worth 500 INR
              </td>
              <td className="border px-4 py-2">
                Gift/discount coupon worth 300 INR
              </td>
              <td className="border px-4 py-2">
                Gift/discount coupon worth 200 INR
              </td>
              <td className="border px-4 py-2">
                Gift/discount coupon worth 100 INR
              </td>
            </tr>
            <tr className="bg-white-100">
              <td className="border px-4 py-2">
                50% off on our online workshop
              </td>
              <td className="border px-4 py-2">
                30% off on our online workshop
              </td>
              <td className="border px-4 py-2">
                20% off on our online workshop
              </td>
              <td className="border px-4 py-2">
                10% off on our online workshop
              </td>
              <td className="border px-4 py-2">
                5% off on our, online workshop
              </td>
            </tr>
            <tr className="bg-white-200">
              <td className="border px-4 py-2">
                Special mention on InCTF page
              </td>
              <td className="border px-4 py-2">Mention on InCTF page</td>
              <td className="border px-4 py-2">Mention on InCTF page</td>
              <td className="border px-4 py-2">Mention on InCTF page</td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr className="bg-white-100">
              <td className="border px-4 py-2">T-Shirts and Goodies</td>
              <td className="border px-4 py-2">T-Shirts</td>
              <td className="border px-4 py-2">T-Shirts</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
            <tr className="bg-white-200">
              <td className="border px-4 py-2">Full Time job opportunity</td>
              <td className="border px-4 py-2">Paid Internship opportunity</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </Container>
  );
}
