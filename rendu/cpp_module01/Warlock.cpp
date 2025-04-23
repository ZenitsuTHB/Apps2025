
#include "Warlock.hpp"

Warlock::Warlock(STDSTR name, STDSTR title) : _name(name)
{
	COUT << getName() << ": This looks like another boring day.\n";
	setTitle(title);
}

const STDSTR & Warlock::getName() const
{
	return _name;
}

const  STDSTR & Warlock::getTitle() const
{
	return _title;
}

void Warlock::setTitle(const STDSTR& title)
{
	_title = title;
}

void Warlock::introduce() const
{
	COUT << this->getName() << ": I am " << this->getName() << ", " << this->getTitle() << "!\n";
}

Warlock::~Warlock()
{
	COUT << this->getName() << ": My job here is done!\n";
}


void Warlock::learnSpell(ASpell * toLearn)
{
	if (toLearn) {
		if(_spellBoook.find(ToLearn->getName()) == _spellBoook.end())
			_spellBoook[toLearn->getName()] == toLearn->clone();

	}
}

void Warlock::forgetSpell(STDSTR& spellName)
{
	std::map<STDSTR, ASpell*>::iterator it = _spellBook.find(spellName);
	if (it != _spellBoook.end())
	{
		delete it->second;
		_spellBoook.erase(it);
	}
}

void Warlock::launchSpell(STDSTR spellName, ATarget * target)
{
	std::map<STDSTR, ASpell*>::iterator it = _spellBoook.find(spellName);
	if (it != _spellBoook.end())
		it->second->launch(target);
}

