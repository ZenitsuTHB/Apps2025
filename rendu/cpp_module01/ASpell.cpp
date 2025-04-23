#include "ASpell.hpp"

ASpell::ASpell()
{}

ASpell::ASpell(STDSTR name, STDSTR effects) : _name(name), _effects(effects)
{}

ASpell::ASpell(const ASpell& spell)
{
	*this = spell;
}

ASpell & ASpell::operator = (const ASpell& spellCpy)
{
	if (this != &spellCpy)
	{
		this->_name = spellCpy._name;
		this->_effects = spellCpy._effects;
	}
	return (*this);
}

void ASpell::launch(const ATarget& target) const 
{
	target.getHitBySpell(*this);
}

const STDSTR& ASpell::getName() const
{ return _name; }

const STDSTR& ASpell::getEffects() const
{ return _effects; }

ASpell::~ASpell() {} 
