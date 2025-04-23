#include "ATarget.hpp"
#include "ASpell.hpp"

ATarget::ATarget()
{}

ATarget::ATarget(STDSTR type) _type(type)
{}

ATarget::ATarget(const ATarget& target)
{
	*this = target;
}

ATarget & ATarget::operator = (const ATarget& target)
{
	if (this != &target)
		_type = target._type;
	return (*this);
}

const STDSTR& ATarget::getType() const
{ return _type; }

void ATarget::getHitBySpell(const ASpell& target)
{
	COUT << _type << " has been " << target.getEffects() << "!\n";
}
		

ATarget::~ATarget() {}

