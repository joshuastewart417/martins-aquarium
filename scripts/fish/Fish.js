/**
 *  Fish which renders individual fish objects as HTML
 */
export const fishCard = (fishObj) => {
  return `<article class="fish-card">
			<div class="fish-card-inner">
				<div class="fish-card-front">
				<img class="fish-image" src="images/${fishObj.image}" alt="Avatar">
				</div>
				<div class="fish-card-back">
				<h3 class="fish-name">${fishObj.name}</h3>
							<ul>
								<li class="fish-details">${fishObj.species}</li>
								<li class="fish-details">Length: ${fishObj.length} inches</li>
								<li class="fish-details">Found: ${fishObj.harvestLocation}</li>
								<li class="fish-details">Diet: ${fishObj.diet}</li>
							</ul>
				</div>
			</div>
		</article>`;
};
