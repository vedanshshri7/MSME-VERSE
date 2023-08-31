import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";

export default function Rightbar({ profile }) {
	const HomeRightbar = () => {
		return (
			<>
				<div className="birthdayContainer">
					<img className="birthdayImg" src="assets/gift.png" alt="" />
					<span className="birthdayText">
						<b>Momo Station</b> and <b>new notification</b>
					</span>
				</div>
				<img className="rightbarAd" src="assets/ad.png" alt="" />
				<h4 className="rightbarTitle">Networks</h4>
				<ul className="rightbarFriendList">
					{Users.map((u) => (
						<Online key={u.id} user={u} />
					))}
				</ul>
			</>
		);
	};

	const ProfileRightbar = () => {
		return (
			<>
				<h4 className="rightbarTitle">About</h4>
				<div className="rightbarInfo">
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Location:</span>
						<span className="rightbarInfoValue">
							Indore,Madhya Pradesh India
						</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">Contact:</span>
						<span className="rightbarInfoValue">
							momostation7@gmail.com
						</span>
					</div>
					<div className="rightbarInfoItem">
						<span className="rightbarInfoKey">
							Job Application:
						</span>
						<span className="rightbarInfoValue">Link</span>
					</div>
				</div>
				<h4 className="rightbarTitle">Saved</h4>
				<div className="rightbarFollowings">
					<div className="rightbarFollowing">
						<img
							src="assets/person/1.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Momo Station
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/2.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Furniture Emporium
						</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/3.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Madhuram</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/4.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Tinku's</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/5.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">Nafees</span>
					</div>
					<div className="rightbarFollowing">
						<img
							src="assets/person/6.jpeg"
							alt=""
							className="rightbarFollowingImg"
						/>
						<span className="rightbarFollowingName">
							Hotel Imperial
						</span>
					</div>
				</div>
			</>
		);
	};
	return (
		<div className="rightbar">
			<div className="rightbarWrapper">
				{profile ? <ProfileRightbar /> : <HomeRightbar />}
			</div>
		</div>
	);
}
