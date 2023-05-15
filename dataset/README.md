## Synthetic data

Synthetic dataset generating according current limitations of Leo programming language and Aleo deploy feature.

KYC features dataset:
- **possible_relative_for_money_laundering**: Money launderer's namesake could potentially be his relative
- **is_prohibited_jurisdiction**: If a person is from a prohibited jurisdiction for this event, then KYC fails
- **with_vpn**: Using a VPN to hide jurisdiction is suspicious
- **sending_time_sec**: If a large amount of time is spent on KYC, it is suspicious. Also, if the sending time is close to zero, then it is possible bot/script
- **photo_quality**: If the photo of the document is perfect quality, then there is a high probability of a pre-prepared photo using virtual camera