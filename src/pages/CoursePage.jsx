import { useState, useRef } from 'react';
import './CoursePage.css';
import Footer from '../components/Footer';
import useGsapFadeIn from '../hooks/useGsapFadeIn';

const dummyCourses = [
	{
		id: 1,
		title: 'Build a Fashion Career',
		mentor: 'Aarushi Mehta',
		tag: 'Popular',
		category: 'Fashion',
		description:
			'This course covers fashion industry fundamentals, personal styling, trend forecasting, portfolio building, networking, brand development, digital marketing for fashion, and practical skills to launch and grow a successful career in fashion.',
	},
	{
		id: 2,
		title: 'Master Business Development',
		mentor: 'Ravi Kumar',
		tag: 'Live',
		category: 'BDE',
		description:
			'Learn essential strategies for building strong client relationships, lead generation, sales techniques, market research, negotiation skills, and effective communication to grow business opportunities and drive revenue in competitive markets.',
	},
	{
		id: 3,
		title: 'Become a Content Influencer',
		mentor: 'Sneha Roy',
		tag: 'New',
		category: 'Influencer',
		description:
			'Learn how to create engaging content, grow your audience, master social media strategies, build your personal brand, collaborate with brands, and monetize your influence effectively across platforms like Instagram, YouTube, and TikTok.',
	},
	{
		id: 4,
		title: 'Digital Marketing for Beginners',
		mentor: 'Karan Singh',
		tag: 'Popular',
		category: 'Marketing',
		description:
			'Learn essential digital marketing strategies including SEO, social media marketing, email campaigns, content creation, paid ads, analytics, and brand building to effectively grow online presence and engage target audiences.',
	},
];

const categories = ['All', 'Fashion', 'BDE', 'Influencer', 'Marketing'];

const CoursePage = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const pageRef = useRef(null);
	useGsapFadeIn(pageRef, 0.2);

	const filteredCourses =
		selectedCategory === 'All'
			? dummyCourses
			: dummyCourses.filter((course) => course.category === selectedCategory);

	const alwaysShowDesc = selectedCategory !== 'All';

	return (
		<section className="course-page" ref={pageRef}>
			<h1 className="page-heading">Explore All Courses</h1>

			<div className="course-filters">
				{categories.map((category) => (
					<button
						key={category}
						className={`filter-btn ${
							selectedCategory === category ? 'active' : ''
						}`}
						onClick={() => setSelectedCategory(category)}
					>
						{category}
					</button>
				))}
			</div>

			<div className="course-grid">
				{filteredCourses.map((course) => (
					<div key={course.id} className="course-card">
						<h3>{course.title}</h3>
						<p
							className={`course-desc ${
								alwaysShowDesc ? 'show-desc' : ''
							}`}
						>
							{course.description}
						</p>
						<p>
							<strong>Mentor:</strong> {course.mentor}
						</p>
						<span
							className={`course-tag ${course.tag.toLowerCase()}`}
						>
							{course.tag}
						</span>
						<button className="btn join">Join Course</button>
					</div>
				))}
			</div>
			<Footer />
		</section>
	);
};

export default CoursePage;
